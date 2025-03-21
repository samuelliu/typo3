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

namespace TYPO3\CMS\Core\Tests\Functional\DataHandling\Select;

use TYPO3\CMS\Core\Tests\Functional\DataHandling\AbstractDataHandlerActionTestCase;

/**
 * Functional test for the DataHandler
 */
abstract class AbstractActionTestCase extends AbstractDataHandlerActionTestCase
{
    protected const VALUE_PageId = 89;
    protected const VALUE_PageIdTarget = 90;
    protected const VALUE_ContentIdFirst = 297;
    protected const VALUE_ContentIdLast = 298;
    protected const VALUE_LanguageId = 1;
    protected const VALUE_ElementIdFirst = 1;
    protected const VALUE_ElementIdSecond = 2;
    protected const VALUE_ElementIdThird = 3;

    protected const TABLE_Content = 'tt_content';
    protected const TABLE_Element = 'tx_testdatahandler_element';

    protected const FIELD_ContentElement = 'tx_testdatahandler_select';

    protected const SCENARIO_DataSet = __DIR__ . '/DataSet/ImportDefault.csv';

    protected $testExtensionsToLoad = [
        'typo3/sysext/core/Tests/Functional/Fixtures/Extensions/irre_tutorial',
        'typo3/sysext/core/Tests/Functional/Fixtures/Extensions/test_datahandler',
    ];

    protected function setUp(): void
    {
        parent::setUp();
        $this->importCSVDataSet(static::SCENARIO_DataSet);

        $this->setUpFrontendSite(1, $this->siteLanguageConfiguration);
        $this->setUpFrontendRootPage(1, ['typo3/sysext/core/Tests/Functional/Fixtures/Frontend/JsonRenderer.typoscript']);
    }

    public function addElementRelation(): void
    {
        $this->actionService->modifyReferences(
            self::TABLE_Content,
            self::VALUE_ContentIdFirst,
            self::FIELD_ContentElement,
            [self::VALUE_ElementIdFirst, self::VALUE_ElementIdSecond, self::VALUE_ElementIdThird]
        );
    }

    public function deleteElementRelation(): void
    {
        $this->actionService->modifyReferences(
            self::TABLE_Content,
            self::VALUE_ContentIdFirst,
            self::FIELD_ContentElement,
            [self::VALUE_ElementIdFirst]
        );
    }

    public function changeElementSorting(): void
    {
        $this->actionService->moveRecord(self::TABLE_Element, self::VALUE_ElementIdFirst, -self::VALUE_ElementIdSecond);
    }

    public function changeElementRelationSorting(): void
    {
        $this->actionService->modifyReferences(
            self::TABLE_Content,
            self::VALUE_ContentIdFirst,
            self::FIELD_ContentElement,
            [self::VALUE_ElementIdSecond, self::VALUE_ElementIdFirst]
        );
    }

    public function createContentAndAddElementRelation(): void
    {
        $newTableIds = $this->actionService->createNewRecord(
            self::TABLE_Content,
            self::VALUE_PageId,
            ['header' => 'Testing #1', self::FIELD_ContentElement => self::VALUE_ElementIdFirst]
        );
        $this->recordIds['newContentId'] = $newTableIds[self::TABLE_Content][0];
    }

    public function createContentAndCreateElementRelation(): void
    {
        $newElementIds = $this->actionService->createNewRecord(self::TABLE_Element, self::VALUE_PageId, ['title' => 'Testing #1']);
        $this->recordIds['newElementId'] = $newElementIds[self::TABLE_Element][0];
        // It's not possible to use "NEW..." values for the TCA type 'select' in a workspace, in live it would have been fine
        $newContentIds = $this->actionService->createNewRecord(self::TABLE_Content, self::VALUE_PageId, ['header' => 'Testing #1', self::FIELD_ContentElement => $this->recordIds['newElementId']]);
        $this->recordIds['newContentId'] = $newContentIds[self::TABLE_Content][0];
    }

    public function modifyElementOfRelation(): void
    {
        $this->actionService->modifyRecord(self::TABLE_Element, self::VALUE_ElementIdFirst, ['title' => 'Testing #1']);
    }

    public function modifyContentOfRelation(): void
    {
        $this->actionService->modifyRecord(self::TABLE_Content, self::VALUE_ContentIdFirst, ['header' => 'Testing #1']);
    }

    public function modifyBothSidesOfRelation(): void
    {
        $this->actionService->modifyRecord(self::TABLE_Element, self::VALUE_ElementIdFirst, ['title' => 'Testing #1']);
        $this->actionService->modifyRecord(self::TABLE_Content, self::VALUE_ContentIdFirst, ['header' => 'Testing #1']);
    }

    public function deleteContentOfRelation(): void
    {
        $this->actionService->deleteRecord(self::TABLE_Content, self::VALUE_ContentIdLast);
    }

    public function deleteElementOfRelation(): void
    {
        $this->actionService->deleteRecord(self::TABLE_Element, self::VALUE_ElementIdFirst);
    }

    public function copyContentOfRelation(): void
    {
        $newTableIds = $this->actionService->copyRecord(self::TABLE_Content, self::VALUE_ContentIdLast, self::VALUE_PageId);
        $this->recordIds['copiedContentId'] = $newTableIds[self::TABLE_Content][self::VALUE_ContentIdLast];
    }

    public function copyElementOfRelation(): void
    {
        $newTableIds = $this->actionService->copyRecord(self::TABLE_Element, self::VALUE_ElementIdFirst, self::VALUE_PageId);
        $this->recordIds['copiedElementId'] = $newTableIds[self::TABLE_Element][self::VALUE_ElementIdFirst];
    }

    /**
     * See DataSet/copyContentToLanguageOfRelation.csv
     */
    public function copyContentToLanguageOfRelation(): void
    {
        $newTableIds = $this->actionService->copyRecordToLanguage(self::TABLE_Content, self::VALUE_ContentIdLast, self::VALUE_LanguageId);
        $this->recordIds['localizedContentId'] = $newTableIds[self::TABLE_Content][self::VALUE_ContentIdLast];
    }

    /**
     * See DataSet/copyElementToLanguageOfRelation.csv
     */
    public function copyElementToLanguageOfRelation(): void
    {
        $newTableIds = $this->actionService->copyRecordToLanguage(self::TABLE_Element, self::VALUE_ElementIdFirst, self::VALUE_LanguageId);
        $this->recordIds['localizedElementId'] = $newTableIds[self::TABLE_Element][self::VALUE_ElementIdFirst];
    }

    public function localizeContentOfRelation(): void
    {
        $newTableIds = $this->actionService->localizeRecord(self::TABLE_Content, self::VALUE_ContentIdLast, self::VALUE_LanguageId);
        $this->recordIds['localizedContentId'] = $newTableIds[self::TABLE_Content][self::VALUE_ContentIdLast];
    }

    public function localizeElementOfRelation(): void
    {
        $newTableIds = $this->actionService->localizeRecord(self::TABLE_Element, self::VALUE_ElementIdFirst, self::VALUE_LanguageId);
        $this->recordIds['localizedElementId'] = $newTableIds[self::TABLE_Element][self::VALUE_ElementIdFirst];
    }

    public function localizeContentOfRelationWithLocalizeReferencesAtParentLocalization()
    {
        $GLOBALS['TCA']['tt_content']['columns'][self::FIELD_ContentElement]['config']['localizeReferencesAtParentLocalization'] = true;
        $newTableIds = $this->actionService->localizeRecord(self::TABLE_Content, self::VALUE_ContentIdLast, self::VALUE_LanguageId);
        $this->recordIds['localizedContentId'] = $newTableIds[self::TABLE_Content][self::VALUE_ContentIdLast];
    }

    public function moveContentOfRelationToDifferentPage(): void
    {
        $this->actionService->moveRecord(self::TABLE_Content, self::VALUE_ContentIdLast, self::VALUE_PageIdTarget);
    }
}
