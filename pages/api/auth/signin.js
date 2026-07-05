
import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
            <h1>Sign in</h1>
            {Object.values(providers).map((provider) => (
                <div key={provider.name} style={{ margin: "10px" }}>
                    <button
                        onClick={() => signIn(provider.id)}
                        style={{ padding: "10px 20px", cursor: "pointer" }}
                    >
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    );
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}
