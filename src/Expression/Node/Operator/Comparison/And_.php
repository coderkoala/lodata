<?php

declare(strict_types=1);

namespace Flat3\Lodata\Expression\Node\Operator\Comparison;

use Flat3\Lodata\Expression\Node\Operator\Comparison;

/**
 * And
 * @package Flat3\Lodata\Expression\Node\Operator\Comparison
 */
class And_ extends Comparison
{
    protected $symbol = 'and';
    protected $precedence = 2;
}
