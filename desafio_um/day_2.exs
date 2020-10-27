defmodule M do

  def main( cont_3_all, cont_2_all ) do
    word = IO.gets("")
            |> String.trim
            |> String.to_charlist

    repetitions = count_repetitions( word, 0, 0, length(word) - 1 )

    cont_3_all = cont_3_all + Enum.at(repetitions, 0)
    cont_2_all = cont_2_all + Enum.at(repetitions, 1)

    return = if word != 'c' do
          main( cont_3_all, cont_2_all)
        else
          [ cont_3_all, cont_2_all ]
        end
    return
  end

  def count_repetitions( iterable, count_3, count_2, i ) do
    number = Enum.count( iterable, fn c -> c == Enum.at(iterable, i) end)
    count_3 = if (number == 3) and (count_3 == 0) do 1 else count_3 end
    count_2 = if (number == 2) and (count_2 == 0) do 1 else count_2 end

    i = i - 1
    return = if i >= 0 do
          count_repetitions( iterable, count_3, count_2, i )
        else
          [ count_3, count_2 ]
        end
    return
  end

end

a = M.main(0,0)
IO.inspect( Enum.at(a, 0) * Enum.at(a, 1) )
