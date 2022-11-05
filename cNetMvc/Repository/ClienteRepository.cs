
using cNetMvc.Database;
using cNetMvc.Model;

namespace cNetMvc.Repository
{
 public class ClienteRepository : IClienteRepository
 {

     private readonly ClienteDbContext _context;

     public ClienteRepository(ClienteDbContext context){
        _context = context;
     }


  public void AddCliente(Cliente cliente)
  {
   _context.Add(cliente);
  }

  public void AtualizarCliente(Cliente cliente)
  {
   throw new NotImplementedException();
  }

  public void DeletarCliente(Cliente cliente)
  {
   throw new NotImplementedException();
  }

  public Task<Cliente> GetClienteBYId(int id)
  {
   throw new NotImplementedException();
  }

  public Task<IEnumerable<Cliente>> GetClientes()
  {
   throw new NotImplementedException();
  }
  public async Task<bool> SaveChangesAsync()
  {
       return await _context.SaveChangesAsync() > 0;
  }
 }
}