import { Buffer } from "buffer";
import { AssembledTransaction, Client as ContractClient, ClientOptions as ContractClientOptions, Result } from '@stellar/stellar-sdk/contract';
import type { u32 } from '@stellar/stellar-sdk/contract';
export * from '@stellar/stellar-sdk';
export * as contract from '@stellar/stellar-sdk/contract';
export * as rpc from '@stellar/stellar-sdk/rpc';
export declare const networks: {
    readonly standalone: {
        readonly networkPassphrase: "Standalone Network ; February 2017";
        readonly contractId: "CDCLPABRT4KEKTVQF3RHJ7CHD7Q5BQPNGNLK5ZEJECVPZLNUGCCTMFWO";
    };
};
export interface InitializedEvent {
    setter: string;
}
export interface NewPairEvent {
    new_pairs_length: u32;
    pair: string;
    token_0: string;
    token_1: string;
}
export interface FeeToSettedEvent {
    new: string;
    old: string;
    setter: string;
}
export interface NewSetterEvent {
    new: string;
    old: string;
}
export interface NewFeesEnabledEvent {
    fees_enabled: boolean;
}
export declare const IdenticalTokensErrors: {
    /**
     * SoroswapFactory: token_a and token_b have identical addresses
     */
    901: {
        message: string;
    };
};
export type Pair = readonly [string, string];
export type DataKey = {
    tag: "FeeTo";
    values: void;
} | {
    tag: "FeeToSetter";
    values: void;
} | {
    tag: "PairWasmHash";
    values: void;
} | {
    tag: "FeesEnabled";
    values: void;
} | {
    tag: "TotalPairs";
    values: void;
} | {
    tag: "PairAddressesNIndexed";
    values: readonly [u32];
} | {
    tag: "PairAddressesByTokens";
    values: readonly [Pair];
};
export declare const Errors: {
    /**
     * SoroswapFactory: not yet initialized
     */
    201: {
        message: string;
    };
    /**
     * SoroswapFactory: token_a and token_b have identical addresses
     */
    202: {
        message: string;
    };
    /**
     * SoroswapFactory: pair already exists between token_a and token_b
     */
    203: {
        message: string;
    };
    /**
     * SoroswapFactory: already initialized
     */
    204: {
        message: string;
    };
    /**
     * SoroswapFactory: pair does not exist
     */
    205: {
        message: string;
    };
    /**
     * SoroswapFactory: index does not exist
     */
    206: {
        message: string;
    };
};
export interface Client {
    /**
     * Construct and simulate a fee_to transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
     * Returns the recipient of the fee.
     *
     * # Arguments
     *
     * * `e` - An instance of the `Env` struct.
     *
     * # Errors
     *
     * Returns an error if the Factory is not yet initialized.
     */
    fee_to: (options?: {
        /**
         * The fee to pay for the transaction. Default: BASE_FEE
         */
        fee?: number;
        /**
         * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
         */
        timeoutInSeconds?: number;
        /**
         * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
         */
        simulate?: boolean;
    }) => Promise<AssembledTransaction<Result<string>>>;
    /**
     * Construct and simulate a fee_to_setter transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
     * Returns the address allowed to change the fee recipient.
     *
     * # Arguments
     *
     * * `e` - An instance of the `Env` struct.
     *
     * # Errors
     *
     * Returns an error if the Factory is not yet initialized.
     */
    fee_to_setter: (options?: {
        /**
         * The fee to pay for the transaction. Default: BASE_FEE
         */
        fee?: number;
        /**
         * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
         */
        timeoutInSeconds?: number;
        /**
         * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
         */
        simulate?: boolean;
    }) => Promise<AssembledTransaction<Result<string>>>;
    /**
     * Construct and simulate a fees_enabled transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
     * Checks if fees are enabled.
     *
     * # Arguments
     *
     * * `e` - An instance of the `Env` struct.
     *
     * # Errors
     *
     * Returns an error if the Factory is not yet initialized.
     */
    fees_enabled: (options?: {
        /**
         * The fee to pay for the transaction. Default: BASE_FEE
         */
        fee?: number;
        /**
         * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
         */
        timeoutInSeconds?: number;
        /**
         * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
         */
        simulate?: boolean;
    }) => Promise<AssembledTransaction<Result<boolean>>>;
    /**
     * Construct and simulate a all_pairs_length transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
     * Returns the total number of pairs created through the factory so far.
     *
     * # Arguments
     *
     * * `e` - An instance of the `Env` struct.
     *
     * # Errors
     *
     * Returns an error if the Factory is not yet initialized.
     */
    all_pairs_length: (options?: {
        /**
         * The fee to pay for the transaction. Default: BASE_FEE
         */
        fee?: number;
        /**
         * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
         */
        timeoutInSeconds?: number;
        /**
         * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
         */
        simulate?: boolean;
    }) => Promise<AssembledTransaction<Result<u32>>>;
    /**
     * Construct and simulate a get_pair transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
     * Returns the address of the pair for `token_a` and `token_b`, if it has been created.
     *
     * # Arguments
     *
     * * `e` - An instance of the `Env` struct.
     * * `token_a` - The address of the first token in the pair.
     * * `token_b` - The address of the second token in the pair.
     *
     * # Errors
     *
     * Returns an error if the Factory is not yet initialized or if the pair does not exist
     */
    get_pair: ({ token_a, token_b }: {
        token_a: string;
        token_b: string;
    }, options?: {
        /**
         * The fee to pay for the transaction. Default: BASE_FEE
         */
        fee?: number;
        /**
         * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
         */
        timeoutInSeconds?: number;
        /**
         * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
         */
        simulate?: boolean;
    }) => Promise<AssembledTransaction<Result<string>>>;
    /**
     * Construct and simulate a all_pairs transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
     * Returns the address of the nth pair (0-indexed) created through the factory, or address(0) if not enough pairs have been created yet.
     *
     * # Arguments
     *
     * * `e` - An instance of the `Env` struct.
     * * `n` - The index of the pair to retrieve.
     *
     * # Errors
     *
     * Returns an error if the Factory is not yet initialized or if index `n` does not exist.
     */
    all_pairs: ({ n }: {
        n: u32;
    }, options?: {
        /**
         * The fee to pay for the transaction. Default: BASE_FEE
         */
        fee?: number;
        /**
         * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
         */
        timeoutInSeconds?: number;
        /**
         * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
         */
        simulate?: boolean;
    }) => Promise<AssembledTransaction<Result<string>>>;
    /**
     * Construct and simulate a pair_exists transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
     * Checks if a pair exists for the given `token_a` and `token_b`.
     *
     * # Arguments
     *
     * * `e` - An instance of the `Env` struct.
     * * `token_a` - The address of the first token in the pair.
     * * `token_b` - The address of the second token in the pair.
     *
     * # Errors
     *
     * Returns an error if the Factory is not yet initialized.
     */
    pair_exists: ({ token_a, token_b }: {
        token_a: string;
        token_b: string;
    }, options?: {
        /**
         * The fee to pay for the transaction. Default: BASE_FEE
         */
        fee?: number;
        /**
         * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
         */
        timeoutInSeconds?: number;
        /**
         * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
         */
        simulate?: boolean;
    }) => Promise<AssembledTransaction<Result<boolean>>>;
    /**
     * Construct and simulate a initialize transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
     * Sets the `fee_to_setter` address and initializes the factory.
     *
     * # Arguments
     *
     * * `e` - An instance of the `Env` struct.
     * * `setter` - The address to set as the current `fee_to_setter`.
     * * `pair_wasm_hash` - The Wasm hash of the pair.
     *
     * # Errors
     *
     * Returns an error if the Factory is already initialized.
     */
    initialize: ({ setter, pair_wasm_hash }: {
        setter: string;
        pair_wasm_hash: Buffer;
    }, options?: {
        /**
         * The fee to pay for the transaction. Default: BASE_FEE
         */
        fee?: number;
        /**
         * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
         */
        timeoutInSeconds?: number;
        /**
         * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
         */
        simulate?: boolean;
    }) => Promise<AssembledTransaction<Result<void>>>;
    /**
     * Construct and simulate a set_fee_to transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
     * Sets the `fee_to` address.
     *
     * # Arguments
     *
     * * `e` - An instance of the `Env` struct.
     * * `to` - The address to set as the `fee_to`.
     *
     * # Errors
     *
     * Returns an error if the Factory is not yet initialized or if the caller is not the current `fee_to_setter`.
     */
    set_fee_to: ({ to }: {
        to: string;
    }, options?: {
        /**
         * The fee to pay for the transaction. Default: BASE_FEE
         */
        fee?: number;
        /**
         * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
         */
        timeoutInSeconds?: number;
        /**
         * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
         */
        simulate?: boolean;
    }) => Promise<AssembledTransaction<Result<void>>>;
    /**
     * Construct and simulate a set_fee_to_setter transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
     * Sets the `fee_to_setter` address.
     *
     * # Arguments
     *
     * * `e` - An instance of the `Env` struct.
     * * `new_setter` - The address to set as the new `fee_to_setter`.
     *
     * # Errors
     *
     * Returns an error if the Factory is not yet initialized or if the caller is not the existing `fee_to_setter`.
     */
    set_fee_to_setter: ({ new_setter }: {
        new_setter: string;
    }, options?: {
        /**
         * The fee to pay for the transaction. Default: BASE_FEE
         */
        fee?: number;
        /**
         * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
         */
        timeoutInSeconds?: number;
        /**
         * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
         */
        simulate?: boolean;
    }) => Promise<AssembledTransaction<Result<void>>>;
    /**
     * Construct and simulate a set_fees_enabled transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
     * Sets whether fees are enabled or disabled.
     *
     * # Arguments
     *
     * * `e` - An instance of the `Env` struct.
     * * `is_enabled` - A boolean indicating whether fees are enabled or disabled.
     *
     * # Errors
     *
     * Returns an error if the Factory is not yet initialized or if the caller is not the current `fee_to_setter`.
     */
    set_fees_enabled: ({ is_enabled }: {
        is_enabled: boolean;
    }, options?: {
        /**
         * The fee to pay for the transaction. Default: BASE_FEE
         */
        fee?: number;
        /**
         * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
         */
        timeoutInSeconds?: number;
        /**
         * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
         */
        simulate?: boolean;
    }) => Promise<AssembledTransaction<Result<void>>>;
    /**
     * Construct and simulate a create_pair transaction. Returns an `AssembledTransaction` object which will have a `result` field containing the result of the simulation. If this transaction changes contract state, you will need to call `signAndSend()` on the returned object.
     * Creates a pair for `token_a` and `token_b` if one doesn't exist already.
     *
     * # Arguments
     *
     * * `e` - An instance of the `Env` struct.
     * * `token_a` - The address of the first token in the pair.
     * * `token_b` - The address of the second token in the pair.
     *
     * # Errors
     *
     * Returns an error if the pair is not yet initialized, if `token_a` and `token_b` have identical addresses, or if the pair already exists between `token_a` and `token_b`.
     */
    create_pair: ({ token_a, token_b }: {
        token_a: string;
        token_b: string;
    }, options?: {
        /**
         * The fee to pay for the transaction. Default: BASE_FEE
         */
        fee?: number;
        /**
         * The maximum amount of time to wait for the transaction to complete. Default: DEFAULT_TIMEOUT
         */
        timeoutInSeconds?: number;
        /**
         * Whether to automatically simulate the transaction when constructing the AssembledTransaction. Default: true
         */
        simulate?: boolean;
    }) => Promise<AssembledTransaction<Result<string>>>;
}
export declare class Client extends ContractClient {
    readonly options: ContractClientOptions;
    constructor(options: ContractClientOptions);
    readonly fromJSON: {
        fee_to: (json: string) => AssembledTransaction<Result<string, import("@stellar/stellar-sdk/contract").ErrorMessage>>;
        fee_to_setter: (json: string) => AssembledTransaction<Result<string, import("@stellar/stellar-sdk/contract").ErrorMessage>>;
        fees_enabled: (json: string) => AssembledTransaction<Result<boolean, import("@stellar/stellar-sdk/contract").ErrorMessage>>;
        all_pairs_length: (json: string) => AssembledTransaction<Result<number, import("@stellar/stellar-sdk/contract").ErrorMessage>>;
        get_pair: (json: string) => AssembledTransaction<Result<string, import("@stellar/stellar-sdk/contract").ErrorMessage>>;
        all_pairs: (json: string) => AssembledTransaction<Result<string, import("@stellar/stellar-sdk/contract").ErrorMessage>>;
        pair_exists: (json: string) => AssembledTransaction<Result<boolean, import("@stellar/stellar-sdk/contract").ErrorMessage>>;
        initialize: (json: string) => AssembledTransaction<Result<void, import("@stellar/stellar-sdk/contract").ErrorMessage>>;
        set_fee_to: (json: string) => AssembledTransaction<Result<void, import("@stellar/stellar-sdk/contract").ErrorMessage>>;
        set_fee_to_setter: (json: string) => AssembledTransaction<Result<void, import("@stellar/stellar-sdk/contract").ErrorMessage>>;
        set_fees_enabled: (json: string) => AssembledTransaction<Result<void, import("@stellar/stellar-sdk/contract").ErrorMessage>>;
        create_pair: (json: string) => AssembledTransaction<Result<string, import("@stellar/stellar-sdk/contract").ErrorMessage>>;
    };
}
