import { t } from "./data";

export default function DataPage() {
  const toolData = t.get("Storybook");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black p-8">
      <h1 className="text-3xl font-bold mb-6">Data Page</h1>
      
      {toolData ? (
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg max-w-md">
          <h2 className="text-xl font-semibold mb-4">Storybook</h2>
          <p className="mb-2"><strong>URL:</strong> <a href={toolData.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{toolData.url}</a></p>
          <p className="mb-2"><strong>Category:</strong> {toolData.category}</p>
          <p><strong>Description:</strong> {toolData.description}</p>
        </div>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}
