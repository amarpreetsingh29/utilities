
  var sampleGraphStructure = {
    1: ['2', '5', '6'],
    6: ['1'],
    5: ['1', '2', '4'],
    3: ['2', '4'],
    4: ['5', '3'] ,
    2: ['1', '3', '5'] 
  }

function connectedComponentsBFS(graph) {
    let prop, running_Queue, vertex, edges, counter
    running_Queue = []
    counter = -1
    for (prop in graph) {
      if (checkVertex(prop, running_Queue)) {
        running_Queue.push(prop)
        ++counter
        while (true) {
          vertex = running_Queue[counter]
          processVertex(vertex)
          running_Queue = addEdgesToRunningQueue(
            graph,
            vertex,
            running_Queue
          )
          if (counter === running_Queue.length - 1) {
            break
          } else {
            ++counter
          }
        }
      }
    }
  }


  function checkVertex(vertex, queue) {
    return queue.indexOf(vertex) == -1 ? true : false
  }
  
  function processVertex(vertex) {
    console.log(vertex)
  }
  function addEdgesToRunningQueue(graph, node, queue) {
    let edgeList
    edgeList = graph[node].edgeList
    for (var i = 0; i < edgeList.length; i++) {
      vertex = edgeList[i]
      if (checkVertex(vertex, queue)) {
        queue.push(vertex)
      }
    }
    return queue
  }
  connectedComponentsBFS(sampleGraphStructure)