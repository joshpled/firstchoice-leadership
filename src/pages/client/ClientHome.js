import { useAuthState } from "react-firebase-hooks/auth";
import { Spinner, Alert } from "react-bootstrap";

import { auth } from "../../firebase";

import { ClientProfile } from "components";

export default function ClientHome() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="client-home-wrapper">
      {error && <Alert variant="danger">{error.message}</Alert>}
      <div className="client-home-container">
        <ClientProfile />
        <div className="client-divider"></div>
        <div className="client-tabs">Hello</div>
      </div>
    </div>
  );
}
