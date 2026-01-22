export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white py-8 border-t border-neutral-800 relative z-50">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
                <p>&copy; {new Date().getFullYear()} Anghelo De Arroz. All rights reserved.</p>
            </div>
        </footer>
    );
}
