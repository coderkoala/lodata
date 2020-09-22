<?php

namespace Flat3\OData\Controller;

use Flat3\OData\Exception\Internal\PathNotHandledException;
use Flat3\OData\Expression\Lexer;
use Flat3\OData\Transaction;

abstract class Handler
{
    public const path = Lexer::PATH_SEPARATOR;

    /** @var string[] $pathComponents */
    protected $pathComponents;

    /** @var Transaction $transaction */
    protected $transaction;

    abstract public function handle(): void;

    public function setup(Transaction $transaction): void
    {
        $this->transaction = $transaction;

        $pathComponents = Lexer::patternMatch($this::path, $transaction->getPath());

        if (!$pathComponents) {
            throw new PathNotHandledException();
        }

        $pathComponents = array_map('rawurldecode', $pathComponents);
        unset($pathComponents[0]);
        $this->pathComponents = array_values($pathComponents);
    }
}
