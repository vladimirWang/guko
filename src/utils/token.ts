export const getToken = (): string | null => {
  return localStorage.getItem('token')
}

export const setToken = (token: string) => {
  return localStorage.setToken('token', token)
}

export const removeToken = (): void => {
  return localStorage.removeItem('token')
}
