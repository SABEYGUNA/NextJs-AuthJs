import { signOut } from "@/configuration/auth"

export function SignOut() {
    return (
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button className="btn btn-blue" type="submit">Sign Out</button>
      </form>
    )
  }