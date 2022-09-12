function construct(Class,...args) 
{
  let object = Object.create(Class.prototype);
  Class.apply(object,args)
  return object;
}