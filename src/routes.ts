import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async (resquest: FastifyRequest, reply: FastifyReply) => {
        return { ok: 'hello world' }
    })
}