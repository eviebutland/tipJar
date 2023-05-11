interface Props {
  error: {
    fieldErrors: string[];
    fields: Record<string, unknown>;
    formError: string;
  };
}
export function ErrorBoundary({ error }: Props) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.fieldErrors}</p>
    </div>
  );
}
