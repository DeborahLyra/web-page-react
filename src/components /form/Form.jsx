import './Form.css'

export function Form() {
    return (
        <div className="formContainer text-white px-4 py-16" >
            <h2 className='contactTitle text-5xl text-center'>Contato</h2>
            <form className='form md:m-0 lg:ml-32 lg:mr-32 transition ease-in-out delay-150 '>
                <div class="formContainer" >
                    <div class="name">
                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" className='w-full p-3 rounded-lg outline-none text-black' />
                    </div>
                    <div class="emailPhone gap-1">
                        <div class='emai'>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" className='w-full p-3 rounded-lg outline-none text-black'/>
                        </div>
                        <div class="phone">
                            <label for="celular">Celular:</label>
                            <input type="tel" id="celular" name="celular" className='w-full p-3 rounded-lg outline-none text-black'/>
                        </div>
                    </div>
                    <div className="textarea">
                        <label for="mensagem" className='msg'>Mensagem:</label>
                        <textarea id="mensagem" name="mensagem" rows="4" className='w-full p-3 rounded-lg outline-none text-black resize-none'></textarea>
                    </div>
                </div>
            </form>
            <button type='submit' className='w-48 p-2 border-2 border-white rounded-lg outline-none font-bold sm:justify-self-center lg:justify-self-end md:m-0 lg:ml-32 lg:mr-32'>Enviar</button>
        </div>

    )
}
