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

namespace TYPO3\CMS\FrontendLogin\Event;

use TYPO3Fluid\Fluid\View\ViewInterface;

/**
 * Allows to inject custom variables into the login form.
 */
final class ModifyLoginFormViewEvent
{
    private ViewInterface $view;

    public function __construct(ViewInterface $view)
    {
        $this->view = $view;
    }

    public function getView(): ViewInterface
    {
        return $this->view;
    }
}
