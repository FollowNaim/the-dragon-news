import { AuthContext } from "@/provider/AuthProvider";
import { Github } from "lucide-react";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Button } from "../ui/button";

function SocialLogin() {
  const { handleGoogleLogin, handleGithubLogin } = useContext(AuthContext);
  const handleLogin = () => {
    handleGoogleLogin();
  };
  return (
    <div>
      <div>
        <h4 className="pb-6 text-lg font-medium">Login With</h4>
        <Button
          onClick={handleLogin}
          className="bg-transparent w-full mb-2"
          size="lg"
          variant="outline"
        >
          <FaGoogle /> Login With Google
        </Button>
        <Button
          className="bg-transparent w-full"
          size="lg"
          variant="outline"
          onClick={handleGithubLogin}
        >
          <Github /> Login with Github
        </Button>
      </div>
    </div>
  );
}

export default SocialLogin;
