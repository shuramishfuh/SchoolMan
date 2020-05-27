using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Models.Core.Interfaces
{
    public interface IRepository<TEntity> where TEntity : class
    {/// <summary>
    /// Get specific entity by id
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
        TEntity Get(int id);
    /// <summary>
    /// get all entity
    /// </summary>
    /// <returns></returns>
    IEnumerable<TEntity> GetAll();
    /// <summary>
    /// finds all entities by type specified
    /// </summary>
    /// <param name="predicate">lambda expression</param>
    /// <returns></returns>
        IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate);
        /// <summary>
        /// finds single entity of type specified
        /// </summary>
        /// <param name="predicate">lambda expression</param>
        /// <returns></returns>
        TEntity SingleOrDefault(Expression<Func<TEntity, bool>> predicate);
        /// <summary>
        /// adds entity of specified type
        /// </summary>
        /// <param name="entity"> Entity type</param>
        void Add(TEntity entity);
        /// <summary>
        /// add a collection of type specified
        /// </summary>
        /// <param name="entities">Entity type</param>
        void AddRange(IEnumerable<TEntity> entities);

        /// <summary>
        /// remove entity of type specified 
        /// </summary>
        /// <param name="entity">Entity type</param>
        void Remove(TEntity entity);
        /// <summary>
        /// remove a collection of type specified
        /// </summary>
        /// <param name="entities">Entity type</param>
        void RemoveRange(IEnumerable<TEntity> entities);





    }
}
