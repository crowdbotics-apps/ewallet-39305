import axios from "axios"
const ewalletAPI = axios.create({
  baseURL: "https://ewallet-39305-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return ewalletAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return ewalletAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_wallet_list(payload) {
  return ewalletAPI.get(`/api/v1/wallet/`)
}
function api_v1_wallet_create(payload) {
  return ewalletAPI.post(`/api/v1/wallet/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return ewalletAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return ewalletAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return ewalletAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return ewalletAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function rest_auth_login_create(payload) {
  return ewalletAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return ewalletAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return ewalletAPI.post(`/rest-auth/logout/`)
}
function api_v1_wallet_retrieve(payload) {
  return ewalletAPI.get(`/api/v1/wallet/${payload.id}/`)
}
function api_v1_wallet_update(payload) {
  return ewalletAPI.put(`/api/v1/wallet/${payload.id}/`, payload.data)
}
function api_v1_wallet_partial_update(payload) {
  return ewalletAPI.patch(`/api/v1/wallet/${payload.id}/`, payload.data)
}
function api_v1_wallet_destroy(payload) {
  return ewalletAPI.delete(`/api/v1/wallet/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return ewalletAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return ewalletAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return ewalletAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return ewalletAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return ewalletAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_wallet_list,
  api_v1_wallet_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_wallet_retrieve,
  api_v1_wallet_update,
  api_v1_wallet_partial_update,
  api_v1_wallet_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
