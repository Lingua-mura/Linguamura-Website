// app/marketplace/layout.tsx
export default function MarketplaceLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="marketplace-container">
            {children}
        </div>
    );
}
