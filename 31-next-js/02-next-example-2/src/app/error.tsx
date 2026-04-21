// app/products/error.tsx
'use client';  // ← обязательно!

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div>
            <h2>Что-то пошло не так!</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>
                Попробовать снова
            </button>
        </div>
    );
}