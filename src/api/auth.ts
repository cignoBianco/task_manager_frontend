export const saveTokens = (access: string, refresh: string) => {
    localStorage.setItem("access_token", access)
    localStorage.setItem("refresh_token", refresh)
  }

  export const getAccessToken = () => {
    return localStorage.getItem("access_token")
  }