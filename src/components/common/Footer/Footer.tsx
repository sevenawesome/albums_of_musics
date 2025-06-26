export default function Footer({children}: {children: React.ReactNode}) {
    return <>
            <footer className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                {children}
            </footer>
        </>
}