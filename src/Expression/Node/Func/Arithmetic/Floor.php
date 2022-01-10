<?php

declare(strict_types=1);

namespace Flat3\Lodata\Expression\Node\Func\Arithmetic;

use Flat3\Lodata\Expression\Node\Func;

/**
 * Floor
 * @package Flat3\Lodata\Expression\Node\Func\Arithmetic
 */
class Floor extends Func
{
    protected $symbol = 'floor';
    protected $argumentCount = 1;
}
