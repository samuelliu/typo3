<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'TYPO3 CMS TypoScript Template',
    'description' => 'Web>Template TYPO3 backend module for management of TypoScript template records for the CMS frontend.',
    'category' => 'module',
    'state' => 'stable',
    'clearCacheOnLoad' => 0,
    'author' => 'TYPO3 Core Team',
    'author_email' => 'typo3cms@typo3.org',
    'author_company' => '',
    'version' => '12.0.0',
    'constraints' => [
        'depends' => [
            'typo3' => '12.0.0',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];
