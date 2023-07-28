import React from "react";

// Define a type utility to extract props of a given component type.
export type PropsOf<
  C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>>;

// Define a type utility to allow polymorphic props for a component.
type AsProp<C extends React.ElementType> = {
  as?: C;
};

// Define a type utility for extending and overriding component props.
export type ExtendableProps<
  ExtendedProps = {},
  OverrideProps = {}
> = OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;

// Define a type utility for inheriting props of a React element type.
export type InheritableElementProps<
  C extends React.ElementType,
  Props = {}
> = ExtendableProps<PropsOf<C>, Props>;

// Define a type utility for creating polymorphic component props.
export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = InheritableElementProps<C, Props & AsProp<C>>;
