from typing import Callable, Optional, Sequence, TypeVar

_T = TypeVar("_T")

def lfu_cache(maxsize: int = ..., typed: bool = ...) -> None: ...
def lru_cache(maxsize: int = ..., typed: bool = ...) -> None: ...
def rr_cache(maxsize: int = ..., choice: Optional[Callable[[Sequence[_T]], _T]] = ..., typed: bool = ...) -> None: ...
def ttl_cache(maxsize: int = ..., ttl: int = ..., timer: float = ..., typed: bool = ...) -> None: ...
