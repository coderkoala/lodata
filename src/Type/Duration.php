<?php

namespace Flat3\Lodata\Type;

use Carbon\CarbonInterval;
use Flat3\Lodata\Expression\Lexer;
use Flat3\Lodata\Helper\Constants;
use Flat3\Lodata\Primitive;

/**
 * Duration
 * @package Flat3\Lodata\Type
 * @method static self factory($value = null, ?bool $nullable = true)
 */
class Duration extends Primitive
{
    const identifier = 'Edm.Duration';

    const openApiSchema = [
        'type' => Constants::OAPI_STRING,
        'format' => 'duration',
        'pattern' => '^'.Lexer::DURATION.'$',
    ];

    /** @var ?CarbonInterval $value */
    protected $value;

    public function toUrl(): string
    {
        if (null === $this->value) {
            return Constants::NULL;
        }

        return sprintf("'%s'", $this::numberToDuration($this->value));
    }

    public static function numberToDuration($seconds): CarbonInterval
    {
        $r = 'P';

        $d = floor($seconds / 86400);
        $r .= $d > 0 ? $d.'D' : '';
        $seconds -= ($d * 86400);

        $r .= 'T';

        $h = floor($seconds / 3600);
        $r .= $h > 0 ? $h.'H' : '';
        $seconds -= ($h * 3600);

        $m = floor($seconds / 60);
        $r .= $m > 0 ? $m.'M' : '';
        $seconds -= ($m * 60);
        $r .= $seconds >= 0 ? $seconds.'S' : '';

        return CarbonInterval::seconds($r);
    }

    public function set($value): self
    {
        if (is_numeric($value)) {
            $value = CarbonInterval::seconds($value);
        }

        if (is_string($value)) {
            $value = $this::durationToNumber($value);
        }

        $this->value = $this->maybeNull(null === $value ? null : $value);

        return $this;
    }

    public static function durationToNumber(string $duration): ?CarbonInterval
    {
        $result = preg_match(
            '@^-?P((?P<d>[0-9]+)D)?(T((?P<h>[0-9]+)H)?((?P<m>[0-9]+)M)?((?P<s>[0-9]+([.][0-9]+)?)S)?)?$@',
            $duration,
            $matches
        );

        $matches = $result === 1 ? $matches : null;

        if (!$matches) {
            return null;
        }

        $interval = new CarbonInterval(0);

        $seconds = (double) (
            ((int) ($matches['d'] ?? 0)) * 86400 +
            ((int) ($matches['h'] ?? 0)) * 3600 +
            ((int) ($matches['m'] ?? 0)) * 60 +
            ((float) ($matches['s'] ?? 0))
        );

        $interval->addSeconds($seconds);

        return $interval;
    }

    public function toJson(): ?string
    {
        if (null === $this->value) {
            return null;
        }

        return $this::numberToDuration($this->value);
    }

    protected function getEmpty()
    {
        return 0;
    }

    public static function fromLexer(Lexer $lexer): Primitive
    {
        /** @phpstan-ignore-next-line */
        return new static($lexer->duration());
    }
}
