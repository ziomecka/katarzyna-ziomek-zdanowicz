type Method = (...args: unknown[]) => unknown;
type CommonMethodsMap = Map<string, Method>;

const commonMethods: CommonMethodsMap = new Map([]);

const registerCommonMethod = (
  (methodId: string, method: Method): CommonMethodsMap => {

    const [ key = '' ] = Array.from(commonMethods.entries())
      .find((entry) => method === entry[1]) || [];

    if (key) {
      throw new Error(`Method already registered under: ${ key }`);
    }
    return commonMethods.set(methodId, method);
  }
);

const getCommonMethod = (methodId: string): Method => {
  return commonMethods.get(methodId);
};

const removeCommonMethod = (methodId: string): boolean => {
  return commonMethods.delete(methodId);
};

export default {
  registerCommonMethod,
  getCommonMethod,
  removeCommonMethod,
};
