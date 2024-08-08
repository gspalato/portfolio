export namespace $Either {
	type Left<T> = {
		left: T;
		right?: never;
	};

	type Right<U> = {
		left?: never;
		right: U;
	};

	/**
	 * A type used to describe 2 possible types.
	 * To check if the value is of type T, {@link $Either}.{@link isLeft} is used.
	 * To check if the value is of type U, {@link $Either}.{@link isRight} is used.
	 * After checking, you can call {@link $Either}.{@link unwrap} to get the actual value with the correct type.
	 *
	 * @typeParam T - The "left" type.
	 * @typeParam U - The "right" type.
	 */
	type Either<T, U> = NonNullable<Left<T> | Right<U>>;
	type UnwrapEither = <T, U>(e: Either<T, U>) => NonNullable<T | U>;

	export type Type<T, U> = Either<T, U>;
	export type Unwrap = UnwrapEither;

	/**
	 * A function used to unwrap an {@link $Either}.{@link Type} into it's actual type.
	 * For proper type checking, using alongside {@link $Either}.{@link isLeft} and/or {@link $Either}.{@link isRight}.
	 *
	 * @param either - An {@link $Either}.{@link Type} object.
	 * @returns The actual value with proper typing.
	 * @throws
	 * Although the {@link $Either}.{@link Type} type is meant to prevent type errors,
	 * this function throws only when the TypeScript compiler couldn't anticipate
	 * a problem during runtime. That means the application is in an unexpected state and
	 * we should terminate immediately.
	 */
	export const unwrap: UnwrapEither = <T, U>({
		left,
		right,
	}: Either<T, U>) => {
		if (right !== undefined && left !== undefined) {
			throw new Error(
				`Received both values at runtime when opening an Either\nLeft: ${JSON.stringify(left)}\nRight: ${JSON.stringify(right)}`,
			);
		}

		// TypeScript is getting confused and returning this type as `T | undefined`
		// unless we add the type assertion.
		if (left !== undefined) return left as NonNullable<T>;

		if (right !== undefined) return right as NonNullable<U>;

		throw new Error(
			`Received no left or right values at runtime when opening Either`,
		);
	};

	/**
	 * Checks if the {@link $Either}.{@link Type} object is a "left" value (type T).
	 *
	 * @param e - The {@link $Either}.{@link Type} object.
	 * @returns A boolean.
	 */
	export const isLeft = <T, U>(e: Either<T, U>): e is Left<T> => {
		return e.left !== undefined;
	};

	/**
	 * Checks if the {@link $Either}.{@link Type} object is a "right" value (type U).
	 *
	 * @param e - The {@link $Either}.{@link Type} object.
	 * @returns A boolean.
	 */
	export const isRight = <T, U>(e: Either<T, U>): e is Right<U> => {
		return e.right !== undefined;
	};

	/**
	 * Makes an {@link $Either}.{@link Type} object with a "left" value.
	 *
	 * @param value - The value to be encapsulated.
	 * @returns An {@link $Either}.{@link Type} object.
	 */
	export const makeLeft = <T>(value: T): Left<T> => ({ left: value });

	/**
	 * Makes an {@link $Either}.{@link Type} object with a "right" value.
	 *
	 * @param value - The value to be encapsulated.
	 * @returns An {@link $Either}.{@link Type} object.
	 */
	export const makeRight = <U>(value: U): Right<U> => ({ right: value });
}
