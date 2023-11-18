import axios from "axios"
const ewalletAPI = axios.create({
  baseURL: "https://ewallet-39305.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return ewalletAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return ewalletAPI.post(`/api/v1/login/`, payload)
}
function api_v1_mybalance_list(payload) {
  return ewalletAPI.get(`/api/v1/mybalance/`)
}
function api_v1_mybalance_create(payload) {
  return ewalletAPI.post(`/api/v1/mybalance/`, payload)
}
function api_v1_mybalance_retrieve(payload) {
  return ewalletAPI.get(`/api/v1/mybalance/${payload.id}/`)
}
function api_v1_mybalance_update(payload) {
  return ewalletAPI.put(`/api/v1/mybalance/${payload.id}/`, payload)
}
function api_v1_mybalance_partial_update(payload) {
  return ewalletAPI.patch(`/api/v1/mybalance/${payload.id}/`, payload)
}
function api_v1_mybalance_destroy(payload) {
  return ewalletAPI.delete(`/api/v1/mybalance/${payload.id}/`)
}
function api_v1_notification_list(payload) {
  return ewalletAPI.get(`/api/v1/notification/`)
}
function api_v1_notification_create(payload) {
  return ewalletAPI.post(`/api/v1/notification/`, payload)
}
function api_v1_notification_retrieve(payload) {
  return ewalletAPI.get(`/api/v1/notification/${payload.id}/`)
}
function api_v1_notification_update(payload) {
  return ewalletAPI.put(`/api/v1/notification/${payload.id}/`, payload)
}
function api_v1_notification_partial_update(payload) {
  return ewalletAPI.patch(`/api/v1/notification/${payload.id}/`, payload)
}
function api_v1_notification_destroy(payload) {
  return ewalletAPI.delete(`/api/v1/notification/${payload.id}/`)
}
function api_v1_payment_list(payload) {
  return ewalletAPI.get(`/api/v1/payment/`)
}
function api_v1_payment_create(payload) {
  return ewalletAPI.post(`/api/v1/payment/`, payload)
}
function api_v1_payment_retrieve(payload) {
  return ewalletAPI.get(`/api/v1/payment/${payload.id}/`)
}
function api_v1_payment_update(payload) {
  return ewalletAPI.put(`/api/v1/payment/${payload.id}/`, payload)
}
function api_v1_payment_partial_update(payload) {
  return ewalletAPI.patch(`/api/v1/payment/${payload.id}/`, payload)
}
function api_v1_payment_destroy(payload) {
  return ewalletAPI.delete(`/api/v1/payment/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return ewalletAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_wallet_list(payload) {
  return ewalletAPI.get(`/api/v1/wallet/`)
}
function api_v1_wallet_create(payload) {
  return ewalletAPI.post(`/api/v1/wallet/`, payload)
}
function api_v1_wallet_retrieve(payload) {
  return ewalletAPI.get(`/api/v1/wallet/${payload.id}/`)
}
function api_v1_wallet_update(payload) {
  return ewalletAPI.put(`/api/v1/wallet/${payload.id}/`, payload)
}
function api_v1_wallet_partial_update(payload) {
  return ewalletAPI.patch(`/api/v1/wallet/${payload.id}/`, payload)
}
function api_v1_wallet_destroy(payload) {
  return ewalletAPI.delete(`/api/v1/wallet/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return ewalletAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return ewalletAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return ewalletAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return ewalletAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return ewalletAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return ewalletAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return ewalletAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return ewalletAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return ewalletAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return ewalletAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return ewalletAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_mybalance_list,
  api_v1_mybalance_create,
  api_v1_mybalance_retrieve,
  api_v1_mybalance_update,
  api_v1_mybalance_partial_update,
  api_v1_mybalance_destroy,
  api_v1_notification_list,
  api_v1_notification_create,
  api_v1_notification_retrieve,
  api_v1_notification_update,
  api_v1_notification_partial_update,
  api_v1_notification_destroy,
  api_v1_payment_list,
  api_v1_payment_create,
  api_v1_payment_retrieve,
  api_v1_payment_update,
  api_v1_payment_partial_update,
  api_v1_payment_destroy,
  api_v1_signup_create,
  api_v1_wallet_list,
  api_v1_wallet_create,
  api_v1_wallet_retrieve,
  api_v1_wallet_update,
  api_v1_wallet_partial_update,
  api_v1_wallet_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
