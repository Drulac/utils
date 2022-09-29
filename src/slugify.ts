/*
 * @poppinss/utils
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { default as slugifyPkg } from 'slugify'

/**
 * Typings of the slugify package are a bit off and therefore we have
 * to do this manual dance of re-assigning types
 */
export const slugify = slugifyPkg as unknown as typeof slugifyPkg['default']
