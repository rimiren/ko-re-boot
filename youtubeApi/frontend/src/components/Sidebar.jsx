export function Sidebar() {
    return (
        <aside className="w-40 bg-white border-r shadow p-4 space-y-4">
            <button className="w-full py-2 px-3 text-left bg-gray-100 rounded hover:bg-gray-200">메인</button>
            <button className="w-full py-2 px-3 text-left bg-gray-100 rounded hover:bg-gray-200">멀티뷰</button>
        </aside>
    );
}