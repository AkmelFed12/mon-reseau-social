import Link from "next/link"
import { auth, signOut } from "@/lib/auth"

export default async function Navbar() {
  const session = await auth()

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <Link href="/" className="text-xl font-bold">
        LMOSpace
      </Link>
      <div>
        {session?.user ? (
          <div className="flex items-center gap-4">
            <span>{session.user.name}</span>
            <form
              action={async () => {
                "use server"
                await signOut()
              }}
            >
              <button type="submit" className="text-red-400 hover:text-red-300">
                Déconnexion
              </button>
            </form>
          </div>
        ) : (
          <Link href="/api/auth/signin" className="hover:underline">
            Connexion
          </Link>
        )}
      </div>
    </nav>
  )
}