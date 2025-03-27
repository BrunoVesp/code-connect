import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import db from "../../../../../prisma/db";
import { AuthOptions } from "next-auth";
import bcrypt from 'bcrypt';

export const options: AuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt',
    maxAge: 3000
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || ""
    }),
    CredentialsProvider({
      credentials: {
        email: {
          label: 'E-mail',
          type: 'email',
          placeholder: 'Digite seu e-mail',
        },
        password: {
          label: 'Senha',
          type: 'password',
          placeholder: 'Digite sua senha'
        }
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) return null;

          const foundUser = await db.user.findFirst({
            where: {
              email: credentials?.email
            }
          });

          if (!foundUser || !foundUser.password) return null;

          if (foundUser && credentials?.password) {
            console.log("User encontrado");
            const passMatch = bcrypt.compareSync(credentials.password, foundUser.password ?? "");

            if (passMatch) {
              console.log("Usuário correto");

              //delete foundUser.password;

              return {
                id: foundUser.id.toString(),
                email: foundUser.email,
                name: foundUser.name,
                image: foundUser.image
              };
            }
          }

        } catch (error) {
          console.log("Erro ao autorizar um usuário", error);
        }
        
        return null;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = parseInt(token.sub);
      }
      return session;
    }
  }
}
