export interface IServiceBase<TRequest, TResponse>{
  execute(request: TRequest): Promise<TResponse>
}