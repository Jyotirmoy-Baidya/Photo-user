"use client";

import React, { useEffect } from "react";
import { Amplify } from "aws-amplify";
import {
    Authenticator,
    Heading,
    Radio,
    RadioGroupField,
    useAuthenticator,
    View,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

// https://docs.amplify.aws/gen1/javascript/tools/libraries/configure-categories/
Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: import.meta.env.VITE_COGNITO_POOL_USER_ID,
            userPoolClientId:
                import.meta.env.VITE_COGNITO_POOL_USER_CLIENT_ID,
        },
    },
});

const components = {
    Header() {
        return (
            <View className="mt-4 mb-7">
                <Heading level={3} className="!text-2xl !font-bold">
                    IDEAS
                    <span className="ml-2 text-secondary-500 font-light hover:!text-primary-300">
                        FOR ME
                    </span>
                </Heading>
                <p className="text-muted-foreground mt-2">
                    <span className="font-bold">Welcome!</span> Please sign in to continue
                </p>
            </View>
        );
    },
    SignIn: {
        Footer() {
            const { toSignUp } = useAuthenticator();
            return (
                <View className="text-center mt-4">
                    <p className="text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <button
                            onClick={toSignUp}
                            className="text-primary hover:underline bg-transparent border-none p-0"
                        >
                            Sign up here
                        </button>
                    </p>
                </View>
            );
        },
    },
    SignUp: {


        Footer() {
            const { toSignIn } = useAuthenticator();
            return (
                <View className="text-center mt-4">
                    <p className="text-muted-foreground">
                        Already have an account?{" "}
                        <button
                            onClick={toSignIn}
                            className="text-primary hover:underline bg-transparent border-none p-0"
                        >
                            Sign in
                        </button>
                    </p>
                </View>
            );
        },
    },
};

const formFields = {
    signIn: {
        username: {
            placeholder: "Enter your email",
            label: "Email",
            isRequired: true,
        },
        password: {
            placeholder: "Enter your password",
            label: "Password",
            isRequired: true,
        },
    },
    signUp: {
        username: {
            order: 1,
            placeholder: "Choose a username",
            label: "Username",
            isRequired: true,
        },
        email: {
            order: 2,
            placeholder: "Enter your email address",
            label: "Email",
            isRequired: true,
        },
        password: {
            order: 3,
            placeholder: "Create a password",
            label: "Password",
            isRequired: true,
        },
        confirm_password: {
            order: 4,
            placeholder: "Confirm your password",
            label: "Confirm Password",
            isRequired: true,
        },
    },
};

const Auth = ({ children }) => {
    const { user } = useAuthenticator((context) => [context.user]);
    // const router = useNavigation();
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;
    console.log(pathname);

    const isAuthPage = pathname.match(/^\/(signin|signup)$/);
    const isDashboardPage =
        pathname != "/";

    console.log(isAuthPage);

    // Redirect authenticated users away from auth pages
    useEffect(() => {
        if (user && isAuthPage) {
            navigate("/home");
        }
    }, [user, isAuthPage, navigate]);

    // Allow access to public pages without authentication
    if (!isAuthPage && !isDashboardPage) {
        return <>{children}</>;
    }

    return (
        <div className="h-full">
            <Authenticator
                initialState={pathname.includes("signup") ? "signUp" : "signIn"}
                components={components}
                formFields={formFields}
            >
                {() => <>{children}</>}
            </Authenticator>
        </div>
    );
};

export default Auth;
