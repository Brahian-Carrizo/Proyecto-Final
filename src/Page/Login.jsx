import { useState } from "react";
import "../Components/Body.css";
import "../Components/Login.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    return (
        <>
            <main className="Conteiner__Sign_in w-100 m-auto">
                <form>
                    <hr className="hr_boder" />
                    <h1 className="h3 mb-3 fw-normal">Please Login</h1>
                    <div className="form-floating">
                        <input type="Text" className="form-control" id="floatingPassword" placeholder="Password" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <label for="floatingPassword">UserName</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button className="btn-Log-in btn btn-primary w-100 py-2" type="submit">Login</button>
                    <hr className="hr_boder" />
                </form>
            </main>
        </>
    )
};