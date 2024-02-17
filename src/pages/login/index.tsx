import { AuthPage } from "../../components/pages/auth";
import { authCredentials  } from "../../providers";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      formProps={{
        initialValues: authCredentials,
      }}
    />
  );
};
