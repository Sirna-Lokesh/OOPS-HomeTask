function construct(Class,...args) 
{
  let object=new Class();
  Class.apply(object,args);
  return object;
}