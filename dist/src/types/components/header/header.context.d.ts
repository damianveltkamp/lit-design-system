export type HeaderContextValue = {
    user: {
        firstName: string;
        lastName: string;
        age: number;
    };
};
export type HeaderContextCallbacks = {
    changeFirstname: (newFirstname: string) => void;
    changeLastname: (newLastname: string) => void;
    incrementAge: () => void;
};
export declare const headerContext: {
    __context__: HeaderContextValue;
};
export declare const headerCallbackContext: {
    __context__: HeaderContextCallbacks;
};
