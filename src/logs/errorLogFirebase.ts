export const handleErrorSignInLogs = (code: any) => {
  switch (code) {
    case "auth/invalid-email":
      throw new Error("E-mail inválido");
    case "auth/internal-error":
      throw new Error("Verifique os dados e tente novamente");
    case "auth/missing-email":
      throw new Error("Digite um e-mail");
    case "auth/weak-password":
      throw new Error("Senha deve conter pelo menos 6 caracteres");
    default:
  }
};