import { CircleStackIcon } from '@heroicons/react/24/solid';

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-teal-100">
      <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg max-w-sm text-center">
        {/* Heroicons proccessing Icon */}
        <CircleStackIcon className="animate-spin h-12 w-12 text-teal-500 mb-4" />
        
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Processing, please wait...</h1>
        <p className="text-gray-600">
        Please hold on while we load the content for you.
        </p>
      </div>
    </div>
  );
}
