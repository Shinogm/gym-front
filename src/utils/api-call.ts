export const API_URL = 'http://localhost:3001'

export const APIENDPOINTS = {
  // Users
  postRegisterPoint: `${API_URL}/users/user/create`,
  postLoginPoint: `${API_URL}/users/user/login`,
  getAllUsersPoint: `${API_URL}/users/user/get`,

  // Clients
  postClientPoint: `${API_URL}/clients/create`,
  getAllClientsPoint: `${API_URL}/clients/get`,
  putModifyClientPoint: (clientID: number) => `${API_URL}/clients/modify-client/${clientID}`,
  deleteClientPoint: (clientID: number) => `${API_URL}/clients/delete-client/${clientID}`,

  // Memberships
  postCreateMembershipPoint: (clientID: number, membershipMonth: number) => `${API_URL}/memberships/membership/update/${clientID}?membership_month=${membershipMonth}`,
  getCheckAllMembershipsPoint: `${API_URL}/memberships/membership/check`,
  getClientWithMembershipPoint: (clientID: number) => `${API_URL}/memberships/membership/get/${clientID}`,
  getVerifyClientPoint: (code: number) => `${API_URL}/memberships/membership/entry/${code}`,
  getVerifyCodePoint: (code: number) => `${API_URL}/memberships/membership/check/${code}`,
  deleteCancelMembershipPoint: (clientID: number) => `${API_URL}/memberships/membership/delete/${clientID}`
}
