import { FastifyRequest, FastifyReply } from "fastify"
import { ListCustomerServices } from "../services/ListCustomerService"



class ListCustomerController {

    async handle(resquest: FastifyRequest, reply: FastifyReply) {
        const listCustomerService = new ListCustomerServices();

        const customers = await listCustomerService.execute();

        reply.send(customers);
    }


}

export { ListCustomerController }