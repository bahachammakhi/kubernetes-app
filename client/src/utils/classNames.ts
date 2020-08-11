function classNames(...args: any[]): string {
  const classes: string[] = args.reduce((output, current) => {
    if (!current) return output;
    if (typeof current === 'string' || typeof current === 'number') return [...output, current];
    const keys = Object.keys(current);
    const values = keys.map(row => current[row]);
    return [...output, classNames(...values)];
  }, []);

  return classes.join(' ');
}

export default classNames;
