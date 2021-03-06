import * as _isAdminOrOwner from '../../src/auth/guards/is-admin-or-owner';
import { isAdmin } from '../../src/entities/users/guards/is-admin';

export function spyOnIsAdminOrOwner(value: boolean, requiredUserId?: string, requiredOrgId?: string) {
  return jest.spyOn(_isAdminOrOwner, 'isAdminOrOwner').mockImplementation(async (userId, orgId) => {
    if (requiredUserId !== undefined && userId !== requiredUserId) {
      return false;
    }

    if (requiredOrgId !== undefined && orgId !== requiredOrgId) {
      return false;
    }

    return value;
  });
}
