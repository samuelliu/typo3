<?php

declare(strict_types=1);

/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

namespace TYPO3\CMS\Extbase\Tests\Functional\Property\TypeConverter;

use TYPO3\CMS\Extbase\Property\PropertyMapper;
use TYPO3\TestingFramework\Core\Functional\FunctionalTestCase;

class FloatConverterTest extends FunctionalTestCase
{
    /**
     * @var bool Speed up this test case, it needs no database
     */
    protected $initializeDatabase = false;

    /**
     * @test
     */
    public function convertToFloat(): void
    {
        $propertyMapper = $this->getContainer()->get(PropertyMapper::class);

        self::assertSame(10.1, $propertyMapper->convert(10.1, 'float'));

        self::assertSame(10.0, $propertyMapper->convert(10, 'float'));

        self::assertSame(10.0, $propertyMapper->convert('10', 'float'));
        self::assertSame(10.5, $propertyMapper->convert('10.5', 'float'));
        self::assertSame(10000.0, $propertyMapper->convert('10E3', 'float'));
        self::assertNull($propertyMapper->convert('string', 'float'));
        self::assertNull($propertyMapper->convert('', 'float'));
    }
}
