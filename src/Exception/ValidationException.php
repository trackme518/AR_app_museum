<?php

namespace App\Exception;

use Exception;

/**
 * Exception thrown when validation of input data fails.
 *
 * This exception can be used to indicate that user input or other data did not pass validation rules.
 */
class ValidationException extends Exception
{
}
