const url = 'contact';

export const onClick =
  async (name: string, email: string): Promise<boolean> => {
    const imp = await import('../../api/');
    const api = imp.default;
    const { result } = await api.request({ url, query: { name, email } });

    return result;
  };
