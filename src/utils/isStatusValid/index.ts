import { statuses, StatusCode } from '../../status';
import { objectValues } from '../objectValues';

/**
 * Check if the status code is valid http status.
 *
 * @access private
 * @param status http status code.
 * @returns boolean
 */
export function isStatusValid(status: StatusCode): boolean {
  return objectValues(statuses).includes(status);
}
