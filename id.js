
/*======================================================================*\
  ICBIaW50OiBtYWtlIHRoaXMgYXMgY2xvc2UgdG8gcHJvZHVjdGlvbi1yZWFkeSBzb3VyY2
  UgY29kZSBhcyB5b3UgY2FuIQoKICBCb251cyBwb2ludHMgZm9yIHRlbGxpbmcgdXMgd2hh
  dCB0aGlzIGRvZXMgaW4gcGxhaW4gdGVybXM6CgogICAgJycuam9pbihpdGVydG9vbHMuY2
  hhaW4oKnppcChzWy0yOjotMl0sIHNbOjotMl0pKSk=
\*======================================================================*/

if (typeof (NAMESPACE) == 'undefined' ||  
		NAMESPACE == null) {
    NAMESPACE = {};

    var id = function (id, all_ids) {
        var persona = {};
        var _id = id;

        var getId = function () {
            return _id;
        }

        persona.getId = getId();
        var _closed = false;
        
        var close = function () {
            if(all_ids[getId()] !== undefined) {
            	all_ids.splice(getId(), 1);		// delete _all_ids[getId()]; will set the specified element with 'undefined'
				this._closed = true;
            }
			return this._closed;
        }
        
        persona.close = close();
        
        return persona;
    }

    NAMESPACE['id'] = id(0, new Array());		// getting the persona object
}