<?php

declare(strict_types=1);

namespace Flat3\Lodata\Expression\Node\Func\DateTime;

use Flat3\Lodata\Expression\Node\Func;

/**
 * Time
 * @package Flat3\Lodata\Expression\Node\Func\DateTime
 */
class Time extends Func
{
    protected $symbol = 'time';
    protected $argumentCount = 1;
}
